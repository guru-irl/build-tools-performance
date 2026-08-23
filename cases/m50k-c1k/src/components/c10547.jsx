import React from 'react';
const LABEL_10547 = 'component_10547';
export function Component10547({ value = 10547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10547, 'data-value': derived.doubled }, children);
}
export default Component10547;
