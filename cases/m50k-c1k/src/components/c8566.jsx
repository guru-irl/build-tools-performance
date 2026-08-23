import React from 'react';
const LABEL_8566 = 'component_8566';
export function Component8566({ value = 8566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8566, 'data-value': derived.doubled }, children);
}
export default Component8566;
