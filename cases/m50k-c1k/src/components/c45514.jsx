import React from 'react';
const LABEL_45514 = 'component_45514';
export function Component45514({ value = 45514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45514, 'data-value': derived.doubled }, children);
}
export default Component45514;
