import React from 'react';
const LABEL_14308 = 'component_14308';
export function Component14308({ value = 14308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14308, 'data-value': derived.doubled }, children);
}
export default Component14308;
