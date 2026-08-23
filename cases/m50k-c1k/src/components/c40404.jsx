import React from 'react';
const LABEL_40404 = 'component_40404';
export function Component40404({ value = 40404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40404, 'data-value': derived.doubled }, children);
}
export default Component40404;
