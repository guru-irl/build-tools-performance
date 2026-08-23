import React from 'react';
const LABEL_19191 = 'component_19191';
export function Component19191({ value = 19191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19191, 'data-value': derived.doubled }, children);
}
export default Component19191;
