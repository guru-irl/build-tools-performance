import React from 'react';
const LABEL_10424 = 'component_10424';
export function Component10424({ value = 10424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10424, 'data-value': derived.doubled }, children);
}
export default Component10424;
