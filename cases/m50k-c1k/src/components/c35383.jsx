import React from 'react';
const LABEL_35383 = 'component_35383';
export function Component35383({ value = 35383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35383, 'data-value': derived.doubled }, children);
}
export default Component35383;
