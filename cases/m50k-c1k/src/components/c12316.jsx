import React from 'react';
const LABEL_12316 = 'component_12316';
export function Component12316({ value = 12316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12316, 'data-value': derived.doubled }, children);
}
export default Component12316;
