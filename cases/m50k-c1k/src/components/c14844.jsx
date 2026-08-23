import React from 'react';
const LABEL_14844 = 'component_14844';
export function Component14844({ value = 14844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14844, 'data-value': derived.doubled }, children);
}
export default Component14844;
