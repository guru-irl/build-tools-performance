import React from 'react';
const LABEL_21361 = 'component_21361';
export function Component21361({ value = 21361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21361, 'data-value': derived.doubled }, children);
}
export default Component21361;
