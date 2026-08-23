import React from 'react';
const LABEL_4335 = 'component_4335';
export function Component4335({ value = 4335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4335, 'data-value': derived.doubled }, children);
}
export default Component4335;
