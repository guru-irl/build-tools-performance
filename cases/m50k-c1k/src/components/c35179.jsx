import React from 'react';
const LABEL_35179 = 'component_35179';
export function Component35179({ value = 35179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35179, 'data-value': derived.doubled }, children);
}
export default Component35179;
