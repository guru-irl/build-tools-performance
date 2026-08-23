import React from 'react';
const LABEL_14011 = 'component_14011';
export function Component14011({ value = 14011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14011, 'data-value': derived.doubled }, children);
}
export default Component14011;
