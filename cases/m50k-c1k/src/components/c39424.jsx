import React from 'react';
const LABEL_39424 = 'component_39424';
export function Component39424({ value = 39424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39424, 'data-value': derived.doubled }, children);
}
export default Component39424;
