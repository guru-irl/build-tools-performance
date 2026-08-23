import React from 'react';
const LABEL_45566 = 'component_45566';
export function Component45566({ value = 45566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45566, 'data-value': derived.doubled }, children);
}
export default Component45566;
