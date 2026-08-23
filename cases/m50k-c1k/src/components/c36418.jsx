import React from 'react';
const LABEL_36418 = 'component_36418';
export function Component36418({ value = 36418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36418, 'data-value': derived.doubled }, children);
}
export default Component36418;
