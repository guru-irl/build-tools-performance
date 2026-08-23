import React from 'react';
const LABEL_40364 = 'component_40364';
export function Component40364({ value = 40364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40364, 'data-value': derived.doubled }, children);
}
export default Component40364;
