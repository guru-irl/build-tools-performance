import React from 'react';
const LABEL_4736 = 'component_4736';
export function Component4736({ value = 4736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4736, 'data-value': derived.doubled }, children);
}
export default Component4736;
