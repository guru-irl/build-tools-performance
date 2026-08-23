import React from 'react';
const LABEL_26246 = 'component_26246';
export function Component26246({ value = 26246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26246, 'data-value': derived.doubled }, children);
}
export default Component26246;
