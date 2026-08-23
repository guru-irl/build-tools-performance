import React from 'react';
const LABEL_29660 = 'component_29660';
export function Component29660({ value = 29660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29660, 'data-value': derived.doubled }, children);
}
export default Component29660;
