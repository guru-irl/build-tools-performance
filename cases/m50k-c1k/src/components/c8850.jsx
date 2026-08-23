import React from 'react';
const LABEL_8850 = 'component_8850';
export function Component8850({ value = 8850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8850, 'data-value': derived.doubled }, children);
}
export default Component8850;
