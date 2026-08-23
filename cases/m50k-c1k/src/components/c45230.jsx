import React from 'react';
const LABEL_45230 = 'component_45230';
export function Component45230({ value = 45230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45230, 'data-value': derived.doubled }, children);
}
export default Component45230;
