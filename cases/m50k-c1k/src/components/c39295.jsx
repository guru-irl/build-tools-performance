import React from 'react';
const LABEL_39295 = 'component_39295';
export function Component39295({ value = 39295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39295, 'data-value': derived.doubled }, children);
}
export default Component39295;
