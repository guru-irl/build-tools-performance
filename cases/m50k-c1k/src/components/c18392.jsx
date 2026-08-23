import React from 'react';
const LABEL_18392 = 'component_18392';
export function Component18392({ value = 18392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18392, 'data-value': derived.doubled }, children);
}
export default Component18392;
