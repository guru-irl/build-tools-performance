import React from 'react';
const LABEL_20773 = 'component_20773';
export function Component20773({ value = 20773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20773, 'data-value': derived.doubled }, children);
}
export default Component20773;
