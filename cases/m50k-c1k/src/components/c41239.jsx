import React from 'react';
const LABEL_41239 = 'component_41239';
export function Component41239({ value = 41239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41239, 'data-value': derived.doubled }, children);
}
export default Component41239;
