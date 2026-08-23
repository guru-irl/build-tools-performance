import React from 'react';
const LABEL_22130 = 'component_22130';
export function Component22130({ value = 22130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22130, 'data-value': derived.doubled }, children);
}
export default Component22130;
