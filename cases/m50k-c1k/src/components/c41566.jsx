import React from 'react';
const LABEL_41566 = 'component_41566';
export function Component41566({ value = 41566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41566, 'data-value': derived.doubled }, children);
}
export default Component41566;
