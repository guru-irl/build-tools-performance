import React from 'react';
const LABEL_4670 = 'component_4670';
export function Component4670({ value = 4670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4670, 'data-value': derived.doubled }, children);
}
export default Component4670;
