import React from 'react';
const LABEL_27006 = 'component_27006';
export function Component27006({ value = 27006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27006, 'data-value': derived.doubled }, children);
}
export default Component27006;
