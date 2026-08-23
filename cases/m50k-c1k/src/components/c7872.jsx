import React from 'react';
const LABEL_7872 = 'component_7872';
export function Component7872({ value = 7872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7872, 'data-value': derived.doubled }, children);
}
export default Component7872;
