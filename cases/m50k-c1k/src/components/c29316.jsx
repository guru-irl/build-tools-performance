import React from 'react';
const LABEL_29316 = 'component_29316';
export function Component29316({ value = 29316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29316, 'data-value': derived.doubled }, children);
}
export default Component29316;
