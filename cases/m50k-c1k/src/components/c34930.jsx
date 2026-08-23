import React from 'react';
const LABEL_34930 = 'component_34930';
export function Component34930({ value = 34930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34930, 'data-value': derived.doubled }, children);
}
export default Component34930;
