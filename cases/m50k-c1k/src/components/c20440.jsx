import React from 'react';
const LABEL_20440 = 'component_20440';
export function Component20440({ value = 20440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20440, 'data-value': derived.doubled }, children);
}
export default Component20440;
