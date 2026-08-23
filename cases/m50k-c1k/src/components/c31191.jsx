import React from 'react';
const LABEL_31191 = 'component_31191';
export function Component31191({ value = 31191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31191, 'data-value': derived.doubled }, children);
}
export default Component31191;
