import React from 'react';
const LABEL_36449 = 'component_36449';
export function Component36449({ value = 36449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36449, 'data-value': derived.doubled }, children);
}
export default Component36449;
