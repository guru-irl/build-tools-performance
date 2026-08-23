import React from 'react';
const LABEL_18316 = 'component_18316';
export function Component18316({ value = 18316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18316, 'data-value': derived.doubled }, children);
}
export default Component18316;
