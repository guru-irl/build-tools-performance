import React from 'react';
const LABEL_20353 = 'component_20353';
export function Component20353({ value = 20353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20353, 'data-value': derived.doubled }, children);
}
export default Component20353;
