import React from 'react';
const LABEL_40223 = 'component_40223';
export function Component40223({ value = 40223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40223, 'data-value': derived.doubled }, children);
}
export default Component40223;
