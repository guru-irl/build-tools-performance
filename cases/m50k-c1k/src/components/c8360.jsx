import React from 'react';
const LABEL_8360 = 'component_8360';
export function Component8360({ value = 8360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8360, 'data-value': derived.doubled }, children);
}
export default Component8360;
