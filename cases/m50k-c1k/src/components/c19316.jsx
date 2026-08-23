import React from 'react';
const LABEL_19316 = 'component_19316';
export function Component19316({ value = 19316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19316, 'data-value': derived.doubled }, children);
}
export default Component19316;
