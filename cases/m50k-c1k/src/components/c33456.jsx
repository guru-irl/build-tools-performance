import React from 'react';
const LABEL_33456 = 'component_33456';
export function Component33456({ value = 33456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33456, 'data-value': derived.doubled }, children);
}
export default Component33456;
