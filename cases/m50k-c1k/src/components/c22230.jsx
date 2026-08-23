import React from 'react';
const LABEL_22230 = 'component_22230';
export function Component22230({ value = 22230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22230, 'data-value': derived.doubled }, children);
}
export default Component22230;
