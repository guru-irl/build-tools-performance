import React from 'react';
const LABEL_26211 = 'component_26211';
export function Component26211({ value = 26211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26211, 'data-value': derived.doubled }, children);
}
export default Component26211;
