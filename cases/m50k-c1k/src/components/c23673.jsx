import React from 'react';
const LABEL_23673 = 'component_23673';
export function Component23673({ value = 23673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23673, 'data-value': derived.doubled }, children);
}
export default Component23673;
