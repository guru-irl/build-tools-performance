import React from 'react';
const LABEL_5373 = 'component_5373';
export function Component5373({ value = 5373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5373, 'data-value': derived.doubled }, children);
}
export default Component5373;
