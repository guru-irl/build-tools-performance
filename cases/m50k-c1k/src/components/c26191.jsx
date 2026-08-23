import React from 'react';
const LABEL_26191 = 'component_26191';
export function Component26191({ value = 26191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26191, 'data-value': derived.doubled }, children);
}
export default Component26191;
