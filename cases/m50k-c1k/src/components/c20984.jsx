import React from 'react';
const LABEL_20984 = 'component_20984';
export function Component20984({ value = 20984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20984, 'data-value': derived.doubled }, children);
}
export default Component20984;
