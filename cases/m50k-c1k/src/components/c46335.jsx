import React from 'react';
const LABEL_46335 = 'component_46335';
export function Component46335({ value = 46335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46335, 'data-value': derived.doubled }, children);
}
export default Component46335;
