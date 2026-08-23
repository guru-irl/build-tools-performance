import React from 'react';
const LABEL_26392 = 'component_26392';
export function Component26392({ value = 26392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26392, 'data-value': derived.doubled }, children);
}
export default Component26392;
