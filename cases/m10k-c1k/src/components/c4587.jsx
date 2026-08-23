import React from 'react';
const LABEL_4587 = 'component_4587';
export function Component4587({ value = 4587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4587, 'data-value': derived.doubled }, children);
}
export default Component4587;
