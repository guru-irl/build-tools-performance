import React from 'react';
const LABEL_21316 = 'component_21316';
export function Component21316({ value = 21316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21316, 'data-value': derived.doubled }, children);
}
export default Component21316;
