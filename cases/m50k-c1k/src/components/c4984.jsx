import React from 'react';
const LABEL_4984 = 'component_4984';
export function Component4984({ value = 4984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4984, 'data-value': derived.doubled }, children);
}
export default Component4984;
