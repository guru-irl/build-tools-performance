import React from 'react';
const LABEL_34415 = 'component_34415';
export function Component34415({ value = 34415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34415, 'data-value': derived.doubled }, children);
}
export default Component34415;
