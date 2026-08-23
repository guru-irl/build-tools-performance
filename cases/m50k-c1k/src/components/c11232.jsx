import React from 'react';
const LABEL_11232 = 'component_11232';
export function Component11232({ value = 11232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11232, 'data-value': derived.doubled }, children);
}
export default Component11232;
