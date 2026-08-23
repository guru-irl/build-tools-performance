import React from 'react';
const LABEL_34381 = 'component_34381';
export function Component34381({ value = 34381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34381, 'data-value': derived.doubled }, children);
}
export default Component34381;
